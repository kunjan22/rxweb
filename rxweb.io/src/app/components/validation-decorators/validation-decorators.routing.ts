import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const VALIDATION_DECORATORS_ROUTES: Routes = [
{
	path:'alpha',
	loadChildren: './alpha/alpha-decorators.module#AlphaDecoratorsModule',
},
 {
	path:'alphaNumeric',
	loadChildren: './alphaNumeric/alphaNumeric-decorators.module#AlphaNumericDecoratorsModule',
},
 {
	path:'compare',
	loadChildren: './compare/compare-decorators.module#CompareDecoratorsModule',
},
 {
	path:'contains',
	loadChildren: './contains/contains-decorators.module#ContainsDecoratorsModule',
},
 {
	path:'creditCard',
	loadChildren: './creditCard/creditCard-decorators.module#CreditCardDecoratorsModule',
},
 {
	path:'different',
	loadChildren: './different/different-decorators.module#DifferentDecoratorsModule',
},
 {
	path:'digit',
	loadChildren: './digit/digit-decorators.module#DigitDecoratorsModule',
},
 {
	path:'email',
	loadChildren: './email/email-decorators.module#EmailDecoratorsModule',
},
 {
	path:'even',
	loadChildren: './even/even-decorators.module#EvenDecoratorsModule',
},
 {
	path:'factor',
	loadChildren: './factor/factor-decorators.module#FactorDecoratorsModule',
},
 {
	path:'greaterThanEqualTo',
	loadChildren: './greaterThanEqualTo/greaterThanEqualTo-decorators.module#GreaterThanEqualToDecoratorsModule',
},
 {
	path:'greaterThan',
	loadChildren: './greaterThan/greaterThan-decorators.module#GreaterThanDecoratorsModule',
},
 {
	path:'hexColor',
	loadChildren: './hexColor/hexColor-decorators.module#HexColorDecoratorsModule',
},
 {
	path:'json',
	loadChildren: './json/json-decorators.module#JsonDecoratorsModule',
},
 {
	path:'leapYear',
	loadChildren: './leapYear/leapYear-decorators.module#LeapYearDecoratorsModule',
},
 {
	path:'lessThanEqualTo',
	loadChildren: './lessThanEqualTo/lessThanEqualTo-decorators.module#LessThanEqualToDecoratorsModule',
},
 {
	path:'lessThan',
	loadChildren: './lessThan/lessThan-decorators.module#LessThanDecoratorsModule',
},
 {
	path:'lowerCase',
	loadChildren: './lowerCase/lowerCase-decorators.module#LowerCaseDecoratorsModule',
},
 {
	path:'mac',
	loadChildren: './mac/mac-decorators.module#MacDecoratorsModule',
},
 {
	path:'maxDate',
	loadChildren: './maxDate/maxDate-decorators.module#MaxDateDecoratorsModule',
},
 {
	path:'maxLength',
	loadChildren: './maxLength/maxLength-decorators.module#MaxLengthDecoratorsModule',
},
 {
	path:'maxNumber',
	loadChildren: './maxNumber/maxNumber-decorators.module#MaxNumberDecoratorsModule',
},
 {
	path:'minDate',
	loadChildren: './minDate/minDate-decorators.module#MinDateDecoratorsModule',
},
 {
	path:'minLength',
	loadChildren: './minLength/minLength-decorators.module#MinLengthDecoratorsModule',
},
 {
	path:'minNumber',
	loadChildren: './minNumber/minNumber-decorators.module#MinNumberDecoratorsModule',
},
 {
	path:'numeric',
	loadChildren: './numeric/numeric-decorators.module#NumericDecoratorsModule',
},
 {
	path:'odd',
	loadChildren: './odd/odd-decorators.module#OddDecoratorsModule',
},
 {
	path:'password',
	loadChildren: './password/password-decorators.module#PasswordDecoratorsModule',
},
 {
	path:'pattern',
	loadChildren: './pattern/pattern-decorators.module#PatternDecoratorsModule',
},
 {
	path:'range',
	loadChildren: './range/range-decorators.module#RangeDecoratorsModule',
},
 {
	path:'required',
	loadChildren: './required/required-decorators.module#RequiredDecoratorsModule',
},
 {
	path:'time',
	loadChildren: './time/time-decorators.module#TimeDecoratorsModule',
},
 {
	path:'upperCase',
	loadChildren: './upperCase/upperCase-decorators.module#UpperCaseDecoratorsModule',
},
 {
	path:'url',
	loadChildren: './url/url-decorators.module#UrlDecoratorsModule',
},
 ];

export const VALIDATION_DECORATORS_ROUTING: ModuleWithProviders = RouterModule.forChild(VALIDATION_DECORATORS_ROUTES);
