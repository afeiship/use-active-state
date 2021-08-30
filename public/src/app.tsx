import React from 'react';
import { useActiveState } from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 40%;
  margin: 30px auto 0;
  padding: 50px;
  border: 1px solid #ccc;
  .row {
    display: flex;
    margin-bottom: 10px;
    strong {
      display: inline-block;
      width: 120px;
    }
  }

  .result {
    background: #eee;
    padding: 20px;
    border: 1px dashed #f60;
    margin-top: 10px;
  }
`;

export default (props: any) => {
  const { state, sync, get } = useActiveState(() => {
    console.log('state:', state, get('username'));
  });

  return (
    <Container>
      <form>
        <label className="row">
          <strong>username:</strong>
          <input type="text" name="username" onChange={sync()} />
        </label>
        <label className="row">
          <strong>email:</strong>
          <input type="text" name="email" onChange={sync()} />
        </label>
        <label className="row">
          <strong>password:</strong>
          <input type="password" name="password" onChange={sync()} />
        </label>
        <div className="actions">
          <button type="button">Submit</button>
        </div>
      </form>

      <div className="result">
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </Container>
  );
};
