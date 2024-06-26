import { getFullYear, getLatestNotification, getFooterCopy } from "./utils";

test('should should function getFullYear returns the correct year ', () => { 
  expect(getFullYear()).toEqual(2023);
 })

 test('should should function getFullYear returns the correct string when the argument is true', () => { 
  const isIndex = true;
  const result = getFooterCopy(isIndex);
  expect(result).toEqual('Holberton School');
 })
 
 test('should should function getFullYear returns the correct string when the argument is false', () => { 
  const isIndex = false;
  const result = getFooterCopy(isIndex);
  expect(result).toEqual('Holberton School main dashboard');
 })

 test('should should function getFullYear returns the correct string ', () => { 
  const result = getLatestNotification();
  expect(result).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
 })