---
sidebar_position: 5
---

# Testing

To ensure all developed functionality works as intended, tests have been implemented.

## Substrate Test

##### Mock Runtime

Pallet test depend on substrate Runtime. To be able to run these pallet test, first we must construct a mock Runtime environment. Mocks for runtime are constructed for each pallet separately and are located in their respective /src/ folder.

##### Writing tests

Tests are functions, annotated with the #[test] macro. To test specific functionality, we use <b>assert</b> macros to match our expectations with the expected result. There are already several predefine assert macros such as:
* assert_eq!
* assert_ok!
* assert_noop!

For more information on how to create tests, refer to the following [link](https://docs.substrate.io/how-to-guides/v3/testing/basics/). 

##### Run tests

To run test each pallet, simply navigate to the `pallets` folder in the [universal-dot-node](https://github.com/UniversalDot/universal-dot-node) repository and run the following command: 

```bash
cargo test
```

To run benchmark tests for each pallet, simply run at pallet root: 

```bash
cargo test --features runtime-benchmarks
```


## Cypress Testing

TO DO
