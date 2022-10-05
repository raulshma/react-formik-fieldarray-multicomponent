import React from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import Top from './Top'
import Middle from './Middle';
import Bottom from './Bottom';


function ReactHookForm({ }) {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      items: [
        {
          name: '',
          price: 0,
        },
      ],
    },
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })
  const allFieldsValue = methods.watch();
  return (
    <div>
      <h1>React Hook Form</h1>
      <FormProvider {...methods}>
        <form style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
          <Top />
          <Middle />
          <Bottom />
        </form>
        <pre style={{ textAlign: 'left', fontSize: "0.725em" }}>{JSON.stringify(allFieldsValue, null, 2)}</pre>
      </FormProvider>
    </div>
  )
}

export default ReactHookForm