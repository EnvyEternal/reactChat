import React from 'react'
import { Formik,Form,Field } from 'formik'
import { connect } from 'formik'
import { enterMassage } from '../../actions'
import { answerMassage } from '../../actions'

const ChatEntryField = (props) => {
    const enterMassageAction = props
    const initialStateMassage = {
        massage: ' '
    }
    const submitHandler = (values, formikBag) =>{
        enterMassageAction(values);
        setTimeout(answerMassage(), 1000)
        formikBag.resetForm()
    }

   return(
         <Formik initialStateMassage={initialStateMassage} onSubmit={submitHandler}>
             {formikProps => {
                 return(
                 <Form>
                     <Field name="massage" />
                     <button type='submit'>Enter massage</button>
                 </Form>
                 );
         }}
         </Formik> 
     );
}
const mapStateToProps = state => state.chatReducerState;

const mapDispatchToProps = dispatch => {
    return{
        enterMassageAction: data => {
            dispatch(enterMassage(data));
        }
    };
};


export default connect(mapDispatchToProps, mapStateToProps) (ChatEntryField)
