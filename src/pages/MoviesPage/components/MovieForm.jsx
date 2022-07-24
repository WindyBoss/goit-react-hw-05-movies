import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const schema = yup
  .object({
    query: yup.string().min(1).required(),
  })
  .required();

export function MovieForm({ onSubmit, paramName }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (errors[paramName]?.message?.length > 0) {
      toast.error('Text something');
    }
  }, [errors, paramName]);

  const formSubmit = data => {
    console.log(data);
    onSubmit({ [paramName]: data.query });
    reset();
  };

  return (
    <form
      style={{ display: 'flex', alignItems: 'center' }}
      onSubmit={handleSubmit(formSubmit)}
    >
      <TextField
        label="Text Query"
        size="small"
        defaultValue=""
        {...register('query', { required: true })}
      />
      <Button sx={btnStyle} variant="outlined" type="submit">
        Search Movie
      </Button>
    </form>
  );
}

const btnStyle = {
  color: 'black',
  border: '1px solid black',
  marginLeft: '10px',
};

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  paramName: PropTypes.string,
};
