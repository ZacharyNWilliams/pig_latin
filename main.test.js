let translate = require('./main');
// test('Adding 2 and 2 should be 4', () => {
// let testSum = sum(2,2);


//     expect(testSum).toBe(4);
// })

// let translate = require('../pig-latin/main');

// //5 vowel Tests

test("if starts with vowel return string + way", () => {

    let testTranslate = translate("Upside");

    expect(testTranslate).toBe("upsideway")


});


test("if starts with vowel return string + way", () => {

    let testTranslate = translate("Australia")


    expect (testTranslate).toBe("australiaway")



});

test("if starts with vowel return string + way", () => {

    let testTranslate = translate("Island")


    expect (testTranslate).toBe("islandway")


});


test("if starts with vowel return string + way", () => {

    let testTranslate = translate("Under")

    expect (testTranslate).toBe("underway")



});

test("if starts with vowel return string + way", () => {

    let testTranslate = translate("After")

    expect (testTranslate).toBe("afterway")



});

//2 single consonant tests

test("if starts with consonant push behind first vowel and add way to end", () => {

    let testTranslate = translate("Car")

    expect (testTranslate).toBe("arcay");



});

test("if starts with 1 consonant push behind first vowel and add way to end", () => {

    let testTranslate = translate("Surf")

    expect (testTranslate).toBe("urfsay");



});

//2 Consonants Tests
test("if starts with 2 consonant push behind first vowel and add way to end", () => {

    let testTranslate = translate("Client")

    expect (testTranslate).toBe("ientclay");



});

//3 consonants test

test("if starts with 3 consonant push behind first vowel and add way to end", () => {

    let testTranslate = translate("Screen")

    expect (testTranslate).toBe("eenscray");



});

//Lowercase conversion

test("if uppercase tur to lowercase ", () => {

    let testTranslate = translate("BAHAMAS")

    expect (testTranslate).toBe("ahamasbay");



});