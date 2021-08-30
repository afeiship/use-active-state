# use-active-state
> React hook for active state.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/use-active-state
```

## usage
  ```tsx
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
  ```

## license
Code released under [the MIT license](https://github.com/afeiship/use-active-state/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/use-active-state
[version-url]: https://npmjs.org/package/@jswork/use-active-state

[license-image]: https://img.shields.io/npm/l/@jswork/use-active-state
[license-url]: https://github.com/afeiship/use-active-state/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/use-active-state
[size-url]: https://github.com/afeiship/use-active-state/blob/master/dist/use-active-state.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/use-active-state
[download-url]: https://www.npmjs.com/package/@jswork/use-active-state
