/*
 * 개발: 정대규
 * 최초: 20161108
 */
"use strict";

var $V = {
	/*
	* preset 최상단에 추가할 method(검증 로직이나 정규식)만 정의한다.
	* rules(사용여부)와 messages(메세지작성)는 addOn 안에 정의한다.
	* jquery.validate.js에 이미 작성되어 있는 method명으로 추가하면 안됨. 이는 jquery.validate.js의 문서를 참조할 것.
	* 추가 불가 method명: id/ID, name/NAME
	*/
	preset: function(names, showStyle){
		var rePw = ""; //비밀번호 확인용 변수

		/*
		* 사용자 ID 체크
		* 영어 대/소문자로 시작하고 숫자를 포함해서 6~20자까지 입력가능
		*/
		$.validator.addMethod("userId", function(value, element){
			return value === "" ? true : /^[a-zA-Z]{1}[a-z0-9]{5,19}$/.test(value);
		});

		/*
		* 비밀번호 체크/confirm
		* 특수문자나 숫자를 최소1자 포함한 대/소문자를 8~20자까지 입력가능
		*/
		$.validator.addMethod("pw", function(value, element){
			return value === "" ? true : /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/.test(value);
		});

		/*
		* 강한 비밀번호 체크/confirm
		* 특수문자와 숫자를 최소1자 포함한 대/소문자를 8~20자까지 입력가능
		*/
		$.validator.addMethod("pwStrong", function(value, element){
			return value === "" ? true : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/.test(value);
		});

		/*
		* 공백을 포함한 이름 체크
		*/
		$.validator.addMethod("userName", function(value, element){
			return value === "" ? true : /^[가-힣\s]*$/.test(value);
		});

		/*
		* 주민등록번호 체크
		* 6-7 패턴으로 구성되며, hyphen이 올 수 있음.
		*/
		$.validator.addMethod("rrn", function(value, element){
			return value === "" ? true : /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-?[1234][0-9]{6}$/.test(value);
		});

		/*
		* 사업자등록번호 체크
		* 필수 항목이 아니므로 공백으로 제거해서 길이가 0이면 true로 간주/처리한다.
		* 숫자로만 3-2-5 패턴으로 구성되며, hyphen이 올 수 있음.
		*/
		$.validator.addMethod("crn", function(value, element){
			return value === "" ? true : /^\d{3}-?\d{2}-?\d{5}$/.test(value);
		});

		/*
		* 우편번호 체크
		* 신우편번호 5자리이거나, 구우편번호 6자리이거나 hyphen을 포함할 수 있음.
		*/
		$.validator.addMethod("zip", function(value, element){
			return value === "" ? true : /^(\d{5})|(\d{3}-?\d{3})$/.test(value);

		});

		/*
		* 주소 체크
		* 대/소문자, 숫자, 한글, 공백, -(hyphen), .(dot), /(slash), &(ampersand) 입력 가능
		*/
		$.validator.addMethod("addr", function(value, element){
			return value === "" ? true : /^[0-9a-zA-Z가-힣\s\-./&]*$/.test(value);
		});

		/*
		* 날짜 체크
		* YYYYMMDD로 입력되야하며, 구분자를 사용할 경우 hyphen, slash, dot이 올 수 있다.
		*/
		$.validator.addMethod("date", function(value, element){
			return value === "" ? true : /^\d{4}[-/.]?(0[1-9]|1[012])[-/.]?(0[1-9]|[12][0-9]|3[0-1])$/.test(value);
		});

		/*
		* 시간 체크
		* HH24MISS로 입력되야하며, 구분자를 사용할 경우 colon만 올 수 있다.
		*/
		$.validator.addMethod("time", function(value, element){
			return value === "" ? true : /^([1-9]|[01][0-9]|2[0-3]):?([0-5][0-9])(:?([0-5][0-9]))?$/.test(value);
		});

		/*
		* 휴대전화 체크
		* hyphen을 포함하지 않을 경우 10~11자리까지 입력가능하고
		* hyphen을 포함하는 경우 11~13자리까지 입력가능
		*/
		$.validator.addMethod("mobile", function(value, element){
			return value === "" ? true : /^010-?\d{3,4}-?\d{4}$/.test(value);
		});

		/*
		* 일반전화 체크
		* hyphen을 포함하지 않을 경우 10~11자리까지 입력가능하고
		* hyphen을 포함하는 경우 11~13자리까지 입력가능함.
		*/
		$.validator.addMethod("phone", function(value, element){
			return value === "" ? true : /^0\d{1,2}-?\d{3,4}-?\d{4}$/.test(value);
		});

		/*
		* IPv4 체크
		* dot이 포함되야 함.
		*/
		$.validator.addMethod("ipv4", function(value, element){
			return value === "" ? true : /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
		});

		/*
		* IPv6 체크
		* 구분자로 colon을 사용함.
		*/
		$.validator.addMethod("ipv6", function(value, element){
			return value === "" ? true : /^([0-9a-fA-F]{4}:){7}([0-9a-fA-F]{4})$/.test(value);
		});

		/*
		* mac address 체크
		* 구분자로 colon이나 hyphen을 사용할 수 있음.
		*/
		$.validator.addMethod("mac", function(value, element){
			return value === "" ? true : /^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$/.test(value);
		});

		/*
		* 숫자만 체크
		*/
		$.validator.addMethod("num", function(value, element){
			return value === "" ? true : /^[0-9]*$/.test(value);
		});

		/*
		* 소문자만 체크
		*/
		$.validator.addMethod("en", function(value, element){
			return value === "" ? true : /^[a-z]*$/.test(value);
		});

		/*
		* 대문자만 체크
		*/
		$.validator.addMethod("EN", function(value, element){
			return value === "" ? true : /^[A-Z]*$/.test(value);
		});

		/*
		* 대/소문자만 체크
		*/
		$.validator.addMethod("En", function(value, element){
			return value === "" ? true : /^[A-Za-z]*$/.test(value);
		});

		/*
		* 숫자,대/소문자만 체크
		*/
		$.validator.addMethod("numEn", function(value, element){
			return value === "" ? true : /^[0-9A-Za-z]*$/.test(value);
		});

		/*
		* 한글만 입력 체크(자음이나 모음만 써진 글자는 false 처리됨.)
		*/
		$.validator.addMethod("ko", function(value, element){
			return value === "" ? true : /^[가-힣]*$/.test(value);
		});

		/*
		* http://나 https://를 제외할 수 있는 URL 입력 체크
		*/
		$.validator.addMethod("urlSimple", function(value, element){
			return value === "" ? true : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w_\.-]*)*\/?$/.test(value);
		});

		/*
		* style#v-valid-style이 없으면 .error 추가해서 invalidHandler에서 사용한다.
		*/
		if($("#v-valid-style").length === 0){
			if(showStyle === "border"){
				var border = "border: 2px solid #d9534f";
				$("head").append("<style id='v-valid-style'>.error {" + border + "}</style>");
			}
			if(showStyle === "background"){
				var background = "background: #d9534f";
				$("head").append("<style id='v-valid-style'>.error {color: white; " + background + "}</style>");
			}
		}
		var INVALID_CLASS = "error";

		/*
		* jquery.validate.js에서 validate 함수의 json 구조를 만든다.
		* 개인에 맞게 수정시 debug 옵션 사용을 권장함.
		*/
		var result = {
			debug: false 
			, rules: {}
			, messages: {}
			, invalidHandler: function(f, v){
				var ve = v.errorList[0];

				/*
				* false인 경우 UI 처리를 해준다.
				*/
				if($("#v-valid-style").length !== 0){
					$("." + INVALID_CLASS).removeClass(INVALID_CLASS);
					$(ve.element).addClass(INVALID_CLASS);
				}

				$(ve.element).focus();
				alert(ve.message);
			}
			, errorPlacement: function(e, o){}
			, submitHandler: function(form){
				/*
				* submit 전에 UI를 복원
				*/
				if($("#v-valid-style").length !== 0){
					$("." + INVALID_CLASS).removeClass(INVALID_CLASS);
				}

				form.submit();
			}
		}; //end: var result = {

		/*
		* rules는 method의 적용 여부를 정의한다.
		* messages는 validate를 통과하지 못할 경우 alert로 출력할 메세지를 작성한다.
		* r과 m을 한쌍으로 간주하고 관리하도록 한다.
		* r과 m의 property는 method와 동일해야 한다.
		* names 배열 변수는 form내의 입력 요소중에 name attribute와 동일해야 한다.
		*/
		var addOn = function(result, name){
			var r = result.rules[name] = {};
			var m = result.messages[name] = {};
			var names = undefined;

			names = ["id", "userId"];
			if(names.indexOf(name) !== -1){
				r.required = true;
				m.required = "ID는 필수 입력 항목입니다.";
				r.userId = true;
				m.userId = "ID는 영문자로 시작하는 6~20자 영문자 또는 숫자로 입력해주세요.";
			}

			names = ["pw", "pwd", "password", "userPw", "userPwd", "userPassword"];
			if(names.indexOf(name) !== -1){
				//r.pw = true;
				//m.pw = "암호는 특수문자나 숫자를 최소 1자 포함한 대/소문자를 8~20자까지 입력할 수 있습니다.";
				r.pwStrong = true;
				m.pwStrong = "암호는 특수문자와 숫자를 각각 최소 1자 포함한 대/소문자를 8~20자까지 입력할 수 있습니다.";
				rePw = names[names.indexOf(name)];
			}

			names = ["rePw", "rePwd", "rePassword", "confirmPw", "confirmPwd", "confirmPassword"];
			if(names.indexOf(name) !== -1){
				//r.pw = true;
				//m.pw = "암호는 특수문자나 숫자를 최소 1자 포함한 대/소문자를 8~20자까지 입력할 수 있습니다.";
				r.pwStrong = true;
				m.pwStrong = "암호는 특수문자와 숫자를 각각 최소 1자 포함한 대/소문자를 8~20자까지 입력할 수 있습니다.";
				r.equalTo = "[name='" + rePw + "']";
				m.equalTo = "암호가 일치하지 않습니다.";
			}

			names = ["mail", "email"];
			if(names.indexOf(name) !== -1){
				r.email = true;
				m.email = "E-mail 형식에 맞지 않습니다.";
				r.minlength = 10;
				m.minlength = $.validator.format("E-mail은 {0}자 이상 입력해주세요.");
			}

			names = ["nm", "name", "userNm", "userName"];
			if(names.indexOf(name) !== -1){
				r.minlength = 2;
				m.minlength = $.validator.format("이름은 {0}자 이상 입력해주세요.");
				r.userName = true;
				m.userName = "이름은 공백을 포함한 한글만 입력할 수 있습니다.";
			}

			names = ["rrn", "jumin", "juminNum", "juminNo"];
			if(names.indexOf(name) !== -1){
				r.rrn = true;
				m.rrn = "주민등록번호 형식에 맞지 않습니다.";
			}

			names = ["crn", "bizNum", "bizNo"];
			if(names.indexOf(name) !== -1){
				r.crn = true;
				m.crn = "사업자등록번호 형식에 맞지 않습니다.";
			}

			names = ["zip", "zipCode", "zipCd", "zipNum", "zipNo"];
			if(names.indexOf(name) !== -1){
				r.zip = true;
				m.zip = "우편번호 형식에 맞지 않습니다.";
			}

			names = ["addr1", "addr2"];
			if(names.indexOf(name) !== -1){
				r.addr = true;
				r.addr = "주소 형식에 맞지 않습니다.";
			}

			names = ["date", "dt"];
			if(names.indexOf(name) !== -1){
				r.date = true;
				m.date = "날짜 형식에 맞지 않습니다.";
			}

			names = ["time", "tm"];
			if(names.indexOf(name) !== -1){
				r.time = true;
				m.time = "시간 형식에 맞지 않습니다.";
			}

			names = ["mobile", "cell"];
			if(names.indexOf(name) !== -1){
				r.minlength = 10;
				m.minlength = "휴대전화 번호는 {0}자 이상 입력해주세요.";
				r.maxlength = 13;
				m.maxlength = "휴대전화 번호는 '-'이 포함되는 경우 {0}자 이하로 입력해주세요.";
				r.mobile = true;
				m.mobile = "휴대전화 번호 형식에 맞지 않습니다.";
			}

			names = ["phone"];
			if(names.indexOf(name) !== -1){
				r.phone = true;
				m.phone = "전화 번호 형식에 맞지 않습니다.";
			}

			names = ["ip", "ipv4"];
			if(names.indexOf(name) !== -1){
				r.ipv4 = true;
				m.ipv4 = "IPv4 형식에 맞지 않습니다.";
			}

			names = ["ipv6"];
			if(names.indexOf(name) !== -1){
				r.ipv6 = true;
				m.ipv6 = "IPv6 형식에 맞지 않습니다.";
			}

			names = ["mac", "macAddr", "macAddress"];
			if(names.indexOf(name) !== -1){
				r.mac = true;
				m.mac = "MAC 주소 형식에 맞지 않습니다.";
			}

			names = ["num", "number", "no"];
			if(names.indexOf(name) !== -1){
				r.num = true;
				m.num = "소문자만 입력할 수 있습니다.";
			}

			names = ["en", "eng"];
			if(names.indexOf(name) !== -1){
				r.en = true;
				m.en = "소문자만 입력할 수 있습니다.";
			}

			names = ["EN", "ENG"];
			if(names.indexOf(name) !== -1){
				r.EN = true;
				m.EN = "대문자만 입력할 수 있습니다.";
			}

			names = ["En", "Eng"];
			if(names.indexOf(name) !== -1){
				r.En = true;
				m.En = "대/소문자만 입력할 수 있습니다.";
			}

			names = ["numEn", "numEng"];
			if(names.indexOf(name) !== -1){
				r.numEn = true;
				m.numEn = "숫자와 대/소문자만 입력할 수 있습니다.";
			}

			names = ["ko", "kor"];
			if(names.indexOf(name) !== -1){
				r.ko = true;
				m.ko = "한글만 입력할 수 있습니다.";
			}

			names = ["home", "homepage", "url"];
			if(names.indexOf(name) !== -1){
				r.urlSimple = true;
				m.urlSimple = "URL 형식에 맞지 않습니다.";
			}
		} //end: var addOn = function(result, name){

		/*
		* 파라미터를 구분해서 for문 처리한다.
		*/
		if($.type(names) === "array"){
			for(var i = 0; i < names.length; i++){
				addOn(result, names[i]);
			}
		}else{ //문자열이면
			addOn(result, names);
		}

		return result;
	} //end: preset: function(names, showStyle){
}; //end: var $V = {
