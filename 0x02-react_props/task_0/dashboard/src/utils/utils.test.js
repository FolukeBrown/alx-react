import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'


// test to check getFullYear returns correct year
test('should getFullYear returns correct year', () => {
	  expect(getFullYear()).toBe(2022);
});


// test to check that getFooter returns correct string
// when arg is false
test('should getFooter returns correct string if false', () => {
	  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// test to check that getFooter returns correct string
// when arg is true
test('should getFooter returns correct string if true', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
});



// test to check that getLatestNotification returns correct
// html string
test('should getLatestNotification returns correct html string', () => {
	  expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});