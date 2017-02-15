import metadata from './metadata.min'

import parseCustom, { get_number_type as getNumberTypeCustom } from './es6/parse'
import formatCustom from './es6/format'
import isValidNumberCustom from './es6/validate'
import asYouTypeCustom from './es6/as you type'

export function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return parseCustom.apply(this, parameters)
}

export function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return formatCustom.apply(this, parameters)
}

export function get_number_type()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return getNumberTypeCustom.apply(this, parameters)
}

// camelCase alias
export function getNumberType()
{
	return is_valid_number.apply(this, arguments)
}

export function is_valid_number()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return isValidNumberCustom.apply(this, parameters)
}

// camelCase alias
export function isValidNumber()
{
	return is_valid_number.apply(this, arguments)
}

export function as_you_type(country)
{
	asYouTypeCustom.call(this, country, metadata)
}

as_you_type.prototype = Object.create(asYouTypeCustom.prototype, {})
as_you_type.prototype.constructor = as_you_type

// camelCase alias

export function asYouType(country)
{
	asYouTypeCustom.call(this, country, metadata)
}

asYouType.prototype = Object.create(asYouTypeCustom.prototype, {})
asYouType.prototype.constructor = asYouType

export { default as parseCustom }         from './es6/parse'
export { default as formatCustom }        from './es6/format'
export { default as isValidNumberCustom } from './es6/validate'

export
{
	default as asYouTypeCustom,
	DIGIT_PLACEHOLDER
}
from './es6/as you type'