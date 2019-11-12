import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";

import Button from "#root/components/shared/Button";
import TextField from "#root/components/shared/TextField";

const ButtonRow = styled.div`
  margin-top: 0.5rem;
`;

const Form = styled.form`
  box-shadow: 0 3px 5px #cccccc;
  padding: 1rem;
  margin: auto;
  width: 40rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 0.75em 0 0.25em;

  :first-child {
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Root = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "joe@bloggs.com",
      name: "Joe Bloggs"
    }
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <TextField
          autoFocus
          name="name"
          placeholder="Name"
          ref={register}
        />
        <Label>Email Address</Label>
        <TextField
          name="email"
          placeholder="Email Address"
          ref={register}
          type="email"
        />
        <ButtonRow>
          <Button type="submit">Sign Up</Button>
        </ButtonRow>
      </Form>
    </Wrapper>
  );
};

export default Root;
