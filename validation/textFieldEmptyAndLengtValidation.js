import Validator from 'validator';
import isEmpty from './is-empty';

//* check if the text field is empty and the length is between min and max characters

module.exports = function validateCommentInput(data,min=5,max=300){
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text: '';
    
    if(!Validator.isLength(data.text, {min: min, max: max})){
        errors.text = `XXX must be between ${min} and ${max} character`;
    }
    
    if(Validator.isEmpty(data.text)){
        errors.text = 'Text field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};