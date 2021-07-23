/* eslint-disable no-unused-vars */
const { sampleRepo } = require('../repository/sample-repository');
const CustomError = require('../errors/custom-error');
const error = require('../constants/error');

const sampleServiceFn = async (req, res, next) => {
	/* 
        전체 비즈니스 로직을 try catch 로 감싼다.
        DB 에러 및 특별히 에러로 규정하는 에러에 대해,
        에러핸들러로 next(err) 를 통해 넘겨줍니다.

        비즈니스 로직에 맞는 Repository의 함수를 호출한다.
        호출 시, req.body, req.query, req.params, req.user 등에 있는 값들을 인자로 넘겨준다.
        Repository 함수가 리턴한 결과를 적합한 statusCode 를 사용하여, json 으로 보내준다.
    */
	try {
		const samples = await sampleRepo.findAll();

		/* 함수로 빼두면 좀 더 보기는 좋을 것 같지만, 굳이 안해도 됩니다. */
		if (customErrorCheck(samples)) {
			/* 에러로 간주해야하는 경우 CustomError 를 반환한다. */
			throw new CustomError(error.SAMPLE_ERROR);
		}

		/* 
			성공 코드를 좀 더 구체적으로 전달해도 되지만, 일반적으로 200 을 사용하기로 합시다!
			데이터를 넘겨주는 부분은 컨테이너에 담아서 보낼지 말지 좀 더 생각해보도록 하겠습니다. 
		*/
		res.status(200).json(samples);
		return;
	} catch (err) {
		/* 
            에러가 발생하는 경우 에러 핸들러에서 컨트롤 하기 위해
		    next(err) 로 보내준다.
         */
		next(err);
	}
};

function customErrorCheck(samples) {
	// 받아온 samples 에 대해서, error 인지 판단하여 리턴
	return true;
}
