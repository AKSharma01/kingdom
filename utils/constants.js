'use strict';

//===================================== ERROR STATUS =====================================
const ERROR_STATUS = {
	// >= 4XX status code
	FAILED: "failed",

	ERROR_400: {
		STATUS: 400,
		MESSAGE: "bad request"
	},
	ERROR_401: {
		STATUS: 401,
		MESSAGE: "unauthorized"
	},
	ERROR_403: {
		STATUS: 403,
		MESSAGE: "forbidden"
	},
	ERROR_404: {
		STATUS: 404,
		MESSAGE: "not found"
	},
	ERROR_409: {
		STATUS: 409,
		MESSAGE: "conflict"
	},
	ERROR_417: {
		STATUS: 417,
		MESSAGE: "expectation failed"
	},
	ERROR_423: {
		STATUS: 423,
		MESSAGE: "locked"
	},
	ERROR_424: {
		STATUS: 424,
		MESSAGE: "failed dependency"
	},

	// >=5XX status code
	ERROR_500: {
		STATUS: 500,
		MESSAGE: "internal server error"
	}
}


//===================================== SUCCESS STATUS =====================================
const SUCCESS_STATUS = {
	SUCCESS: "success",
	
	SUCCESS_200: {
		STATUS: 200,
		MESSAGE: "success"
	},
	SUCCESS_201: {
		STATUS: 201,
		MESSAGE: "new entity created"
	}
}

const SEQUEL_TABLE_NAME = {
    EMPIRE_TABLE: "empire",
    RECORD_TABLE: "record",
    BATTALION_TABLE: 'battalion',
    ARMY_STRENGTH_TABLE: "army_strength",
}

const NO_SEQUEL_TABLE_NAME = {
    
}

const RECORD_RESULT = {
	WIN: 'WIN',
	LOSE: 'LOSE'
}

module.exports = {
	...ERROR_STATUS,
	...RECORD_RESULT,
	...SUCCESS_STATUS,
    ...SEQUEL_TABLE_NAME,
    ...NO_SEQUEL_TABLE_NAME
}
