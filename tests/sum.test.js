/* eslint-disable no-undef */
import {
  Add,
  Substract,
  Mult,
  Divide,
} from '../src/modules/operations/simpleCommands';

import Degree2 from '../src/modules/operations/Degree2';
import Degree3 from '../src/modules/operations/Degree3';
import DegreeY from '../src/modules/operations/DegreeY';

import Root2 from '../src/modules/operations/Root2';
import Root3 from '../src/modules/operations/Root3';
import RootY from '../src/modules/operations/RootY';

import Fact from '../src/modules/operations/Fact';
import Inverse from '../src/modules/operations/Inverse';
import TenDegreeX from '../src/modules/operations/TenDegreeX';

test('Properly Add', () => {
  expect(new Add([2, 3]).execute()).toBe(5);
});

test('Properly Substract', () => {
  expect(new Substract([5, 3]).execute()).toBe(2);
});

test('Properly Mult', () => {
  expect(new Mult([2, 5]).execute()).toBe(10);
});

test('Properly Divide', () => {
  expect(new Divide([100, 4]).execute()).toBe(25);
});

test('Properly Degree2', () => {
  expect(new Degree2(['', 3]).execute()).toBe(9);
});

test('Properly Degree3', () => {
  expect(new Degree3(['', 3]).execute()).toBe(27);
});

test('Properly DegreeY', () => {
  expect(new DegreeY([2, 4]).execute()).toBe(16);
});

test('Properly Root2', () => {
  expect(new Root2(['', 16]).execute()).toBe(4);
});

test('Properly Root3', () => {
  expect(new Root3(['', 8]).execute()).toBe(2);
});

test('Properly RootY', () => {
  expect(new RootY([16, 4]).execute()).toBe(2);
});

test('Properly Fact', () => {
  expect(new Fact(['', 7]).execute()).toBe(5040);
});

test('Properly Inverse', () => {
  expect(new Inverse(['', 5]).execute()).toBe(0.2);
});

test('Properly TenDegreeX', () => {
  expect(new TenDegreeX(['', 3]).execute()).toBe(1000);
});
