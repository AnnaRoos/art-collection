import useValidation from '../../hooks/useValidation';

import styles from './OldForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';

const Form = () => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangedHandler: titleChangedHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useValidation(isNotEmpty);

  const {
    value: artistValue,
    isValid: artistIsValid,
    hasError: artistHasError,
    valueChangedHandler: artistChangedHandler,
    inputBlurHandler: artistBlurHandler,
    reset: resetArtistInput,
  } = useValidation(isNotEmpty);

  const {
    value: yearValue,
    isValid: yearIsValid,
    hasError: yearHasError,
    valueChangedHandler: yearChangedHandler,
    inputBlurHandler: yearBlurHandler,
    reset: resetYearInput,
  } = useValidation(isNotEmpty);

  const {
    value: yearPurchasedValue,
    isValid: yearPurchasedIsValid,
    hasError: yearPurchasedHasError,
    valueChangedHandler: yearPurchasedChangedHandler,
    inputBlurHandler: yearPurchasedBlurHandler,
    reset: resetPurchasedYearInput,
  } = useValidation(isNotEmpty);

  let formIsValid = false;

  if (titleIsValid && artistIsValid && yearIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(titleValue, artistValue, yearValue);
    resetTitleInput();
    resetArtistInput();
    resetYearInput();
  };

  const inputClasses = (inputHasError) => {
    if (!inputHasError) {
      return styles.textInput;
    } else {
      return styles.hasError;
    }
  };
  const titleClasses = inputClasses(titleHasError);
  const artistClasses = inputClasses(artistHasError);
  const yearClasses = inputClasses(yearHasError);
  const yearPurchasedClasses = inputClasses(yearPurchasedHasError);
  return (
    <>
      <form className={styles.form} onSubmit={formSubmissionHandler}>
        <div className="form-control">
          <label htmlFor="title">Title: </label>
          <input
            className={titleClasses}
            list="titles"
            id="title"
            name="title"
            value={titleValue}
            onChange={titleChangedHandler}
            onBlur={titleBlurHandler}
          />
          <datalist id="titles">
            <option value="No title" />
          </datalist>
        </div>
        <div className="form-control">
          <label htmlFor="artist">Artist: </label>
          <input
            className={artistClasses}
            list="artists"
            id="artist"
            name="artist"
            value={artistValue}
            onChange={artistChangedHandler}
            onBlur={artistBlurHandler}
          />
          <datalist id="artists">
            <option value="Unknown" />
          </datalist>
        </div>
        <div className="form-control">
          <label htmlFor="year">Year: </label>
          <input
            className={yearClasses}
            type="number"
            id="year"
            name="year"
            min="1900"
            max="2100"
            value={yearValue}
            onChange={yearChangedHandler}
            onBlur={yearBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="purchased">Year purchased: </label>
          <input
            className={yearPurchasedClasses}
            type="number"
            id="purchased"
            name="yearPurchased"
            min="1900"
            max="2100"
            value={yearPurchasedValue}
            onChange={yearPurchasedChangedHandler}
            onBlur={yearPurchasedBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price(SEK): </label>
          <input type="number" id="price" />
        </div>
        <div className="form-control">
          <label htmlFor="type">Type: </label>
          <input list="types" id="type" />
          <datalist id="types">
            <option value="Painting" />
            <option value="Sculpture" />
            <option value="Print" />
            <option value="Photo" />
            <option value="Textile" />
            <option value="Object" />
            <option value="Installation" />
            <option value="Digital" />
          </datalist>
        </div>
        <div className="form-control">
          <label htmlFor="material">Material: </label>
          <select id="material" name="material" multiple>
            <option value="Canvas">Canvas</option>
            <option value="Paper">Paper</option>
            <option value="Ceramics">Ceramics</option>
            <option value="Glass">Glass</option>
            <option value="Glass">Plastic</option>
            <option value="Textile">Textile</option>
            <option value="Metal">Metal</option>
            <option value="Wood">Wood</option>
            <option value="Digital">Digital</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="height">Height(cm): </label>
          <input type="number" id="height" />
        </div>
        <div className="form-control">
          <label htmlFor="length">Length(cm): </label>
          <input type="number" id="length" />
        </div>
        <div className="form-control">
          <label htmlFor="width">Width(cm): </label>
          <input type="number" id="width" />
        </div>
        <div className="form-control">
          <label htmlFor="image">Select an image: </label>
          <input type="file" id="image" name="image"></input>
        </div>
        <div className="form-actions">
          <button className={styles.button} disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
