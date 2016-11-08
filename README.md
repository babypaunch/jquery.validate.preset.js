<style>
	@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);
	*, html, body {
		font-family: 'Nanum Gothic', sans-serif;
	}
	
	th {
		text-align: center;
	}
	
	th.header {background: silver; color: white;}
	th.th {vertical-align: middle;}
	
	.green {color: green;}
	
	.tab:before {content: "\00a0\00a0\00a0\00a0"}
	.tab2x:before {content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"}
	.tab3x:before {content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"}
	.tab4x:before {content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0"}
</style>

# jquery.validate.preset.js #
* jquery의 validate plugin을 쉽게 사용하고자 만든 preset 성격의 js임.  
* 라이센스 따위 없음. 마음대로 쓰시고 좋은 의견은 남겨주시면 더 좋구요.  
* 자세한 내용은 jquery.validate를 참조할 것.
* sample: validator.html

## Install js file & Usage ##
<div>1. jquery와 jquery.validate.js에 종속적이므로 반드시 jquery와 jquery.validate.js 파일의 아래에 jquery.validate.preset.js 파일을 위치시켜야 한다.</div>
<br/>
<div>2. 전역변수 $V는 사용자 선택에 따라 변경해서 사용하면 된다.</div>

<table>
	<tr>
		<th class="header">Example</th>
	</tr>
	<tr>
		<td>
		<div>`<html>`</div>
		<div>`<head>`</div>
		<div class="tab">`<script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>`</div>
		<div class="tab">`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.1/jquery.validate.js"></script>`</div>
		<div class="tab">`<script src="./jquery.validate.preset.js"></script>`</div>
		<div class="tab">`<script>`</div>
		<div class="tab">`$(function(){`</div>
		<div class="green tab2x">//validate에 등록할 form의 하위 요소중에 name에 해당하는 값을 등록한다.</div>
		<div class="tab2x">`$("#form").validate($V.preset(["userId", "userPw"], "background"));`</div>
		<br/>
		<div class="tab2x">`$("#btnSubmit").click(function(){`</div>
		<div class="tab3x green">//validate 결과에 따라 후처리한다.</div>
		<div class="tab3x">`if($("#form").valid()){`</div>
		<div class="tab4x">`$("#form").submit();`</div>
		<div class="tab3x">`}else{`</div>
		<div class="tab4x">`return false;`</div>
		<div class="tab3x">`}`</div>
		<div class="tab2x">`});`</div>
		<div class="tab">`});`</div>
		<div class="tab">`</script>`</div>
		<div>`</head>`</div>
		<div>`<body>`</div>
		<div class="tab">`<form id="form" method="post" action="/submit">`</div>
		<div class="tab2x">`<input type="text" name="userId"/>`</div>
		<div class="tab2x">`<input type="text" name="userPw"/>`</div>
		<div class="tab2x">`<button type="button" id="btnSubmit">SUBMIT</button>`</div>
		<div class="tab">`</form>`</div>
		<div>`</body>`</div>
		<div>`</html>`</div>
		</td>
	</tr>
</table>

## $V.preset(names, showStyle) Method ##
* 기본적으로 validate를 통과하지 못하면 alert()과 focus()가 무조건 동작된다.

<table>
	<tr>
		<th class="th">파라미터</th>
		<th class="th">설명</th>
	</tr>
	<tr>
		<th class="th">names</th>
		<td>
			<div>1. validate에 등록하고자하는 input과 같은 form 요소를 등록하기 위해, 배열로 name의 값을 대입해주면 된다.(딱 하나만 validate 처리하고자 하는 경우엔 그냥 문자열로 name의 값을 대입해도 된다.)</div>
			<br/>
			<div>2. 상황에 따라 preset에 없는 name의 값을 사용하고자 하는 경우엔, preset 파일에 추가 등록해주어야 한다.</div>
		</td>
	</tr>
	<tr>
		<th class="th">showStyle</th>
		<td>
			<div>1. validate를 통과하지 못할 경우 표현될 방식을 선택한다.</div>
			<br/>
			<div>2. "border"는 선을 붉게, "background"는 배경을 붉게표현하고, 지정하지 않을 경우엔 표시되지 않는다.</div>
		</td>
	</tr>
</table>

## preset names ##
<table>
	<tr>
		<th class="th">구분</th>
		<th class="th">등록된 name & 설명</th>
	</tr>
	<tr>
		<th class="th">ID</th>
		<td>
			<div>id, userId</div>
			<div class="green">영어 대/소문자로 시작하고 숫자를 포함해서 6~20자까지 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">비밀번호</th>
		<td>
			<div>pw, pwd, password, userPw, userPwd, userPassword</div>
			<div class="green">특수문자나 숫자를 최소1자 포함한 대/소문자를 8~20자까지 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">비밀번호 확인</th>
		<td>
			<div>rePw, rePwd, rePassword, confirmPw, confirmPwd, confirmPassword</div>
			<div class="green">특수문자나 숫자를 최소1자 포함한 대/소문자를 8~20자까지 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">이메일</th>
		<td>
			<div>mail, email</div>
			<div class="green">자체 내장된 property 규칙 사용</div>
		</td>
	</tr>
	<tr>
		<th class="th">이름</th>
		<td>
			<div>nm, name, userNm, userName</div>
			<div class="green">공백을 포함하는 한글로 자음이나 모음만 입력할 수 없다.</div>
		</td>
	</tr>
	<tr>
		<th class="th">주민등록번호</th>
		<td>
			<div>rrn, jumin, juminNum, juminNo</div>
			<div class="green">-(hyphen) 기호를 포함할 수 있으며, 숫자만 입력가능.</div>
		</td>
	</tr>
	<tr>
		<th class="th">사업자등록번호</th>
		<td>
			<div>crn, bizNum, bizNo</div>
			<div class="green">-(hyphen) 기호를 포함할 수 있으며, 숫자만 입력가능.</div>
		</td>
	</tr>
	<tr>
		<th class="th">우편번호</th>
		<td>
			<div>zip, zipCode, zipCd, zipNum, zipNo</div>
			<div class="green">구우편번호 체계이면 -(hyphen) 기호를 포함할 수 있으며, 숫자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">주소1</th>
		<td>
			<div>addr1</div>
			<div class="green">숫자, 대/소문자, 한글(완성형), 특수문자(.(dot), /(slash), -(hyphen), &(ampersand)) 입력 가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">주소2</th>
		<td>
			<div>addr2</div>
			<div class="green">숫자, 대/소문자, 한글(완성형), 특수문자(.(dot), /(slash), -(hyphen), &(ampersand)) 입력 가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">날짜</th>
		<td>
			<div>date, dt</div>
			<div class="green">YYYYMMDD 패턴으로 숫자만 입력가능하고 구분자로 -(hyphen), /(slash), .(dot)을 사용할 수 있음.</div>
		</td>
	</tr>
	<tr>
		<th class="th">시간</th>
		<td>
			<div>time, tm</div>
			<div class="green">HH24MISS 패턴으로 숫자만 입력가능하고 구분자로 :(colon)을 사용할 수 있음.</div>
		</td>
	</tr>
	<tr>
		<th class="th">휴대전화</th>
		<td>
			<div>mobile, cell</div>
			<div class="green">010으로 시작하는 번호만 입력가능하고 구분자로 -(hyphen)을 사용할 수 있음.</div>
		</td>
	</tr>
	<tr>
		<th class="th">전화</th>
		<td>
			<div>phone</div>
			<div class="green">숫자만 입력가능하고 구분자로 -(hyphen)을 사용할 수 있음.</div>
		</td>
	</tr>
	<tr>
		<th class="th">IPv4</th>
		<td>
			<div>ip, ipv4</div>
			<div class="green">.(dot)으로 구분된 IPv4 패턴에 맞아야 함.</div>
		</td>
	</tr>
	<tr>
		<th class="th">IPv6</th>
		<td>
			<div>ipv6</div>
			<div class="green">:(colon)으로 구분된 IPv6 패턴에 맞아야 함.</div>
		</td>
	</tr>
	<tr>
		<th class="th">MAC 주소</th>
		<td>
			<div>mac, macAddr, macAddress</div>
			<div class="green">mac 주소 패턴에 맞아야 하며, 구분자로 :(color), -(hyphen)을 사용할 수 있음.</div>
		</td>
	</tr>
	<tr>
		<th class="th">숫자</th>
		<td>
			<div>num, number, no</div>
			<div class="green">숫자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">소문자</th>
		<td>
			<div>en, eng</div>
			<div class="green">소문자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">대문자</th>
		<td>
			<div>EN, ENG</div>
			<div class="green">대문자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">대/소문자</th>
		<td>
			<div>En, Eng</div>
			<div class="green">대/소문자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">숫자/대/소문자</th>
		<td>
			<div>numEn, numEng</div>
			<div class="green">숫자, 대문자, 소문자만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">한글</th>
		<td>
			<div>ko, kor</div>
			<div class="green">자음, 모음만 있지 않은 완성형 한글만 입력가능</div>
		</td>
	</tr>
	<tr>
		<th class="th">URL</th>
		<td>
			<div>home, homepage, url</div>
			<div class="green">http(s)://를 포함하거나 포함하지 않아도 되는 URL 패턴을 입력</div>
		</td>
	</tr>
</table>