/// <reference path='fourslash.ts' />

// @typeRoots: my_typings

// @Filename: test.ts
//// /// <reference path="[|./some|]/*0*/
//// /// <reference types="[|some|]/*1*/

//// /// <reference path="[|./some|]/*2*/" />
//// /// <reference types="[|some|]/*3*/" />

// @Filename: someFile.ts
//// /*someFile*/

// @Filename: my_typings/some-module/index.d.ts
//// export var x = 9;

goTo.marker("0");
verify.importModuleCompletionListContains("someFile.ts", 0);

goTo.marker("1");
verify.importModuleCompletionListContains("some-module", 1);

goTo.marker("2");
verify.importModuleCompletionListContains("someFile.ts", 2);

goTo.marker("3");
verify.importModuleCompletionListContains("some-module", 3);