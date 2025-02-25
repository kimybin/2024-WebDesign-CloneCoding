// script.js 파일 내용
document.getElementById('profileImage').addEventListener('click', function() {
    var imageUrl = prompt("이미지 URL을 입력해 주세요!", "");
    if (imageUrl)
        this.src = imageUrl;
    }
);

document.getElementById('changeUsernameIcon').addEventListener('click', function() {
    var newUsername = prompt("새로운 아이디를 입력하세요");
    if (newUsername !== null && newUsername !== "") {
        document.getElementById('profilename').textContent = newUsername;
    }
});

var profileEditButton = document.querySelector("#editProfileButton");
var userInfo = document.querySelector("#user-Info");
var summary = document.querySelector("#summary");
var profileDetail = document.querySelector("#profileDetail");
var changing = false;

profileEditButton.onclick = function (e) {
    if(changing) {
        var _userInfo = userInfo.querySelector("input").value;
        var _summary = summary.querySelector("input").value;
        var _profileDetail = profileDetail.querySelector("input").value;
                    
        userInfo.innerHTML = _userInfo;
        summary.innerHTML = _summary;

        if(_profileDetail.startsWith("http")) {
            _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>";
        }

        profileDetail.innerHTML = _profileDetail;

        e.target.textContent = "프로필 편집";
        changing = false;
        
    } else {
        var _userInfo = userInfo.textContent;
        var _summary = summary.textContent;
        var _profileDetail = profileDetail.textContent;

        userInfo.innerHTML = `<input value="${userInfo.textContent}"></input>`; // 변경됨: 보간 수정
        summary.innerHTML = `<input value="${summary.textContent}"></input>`; // 변경됨: 보간 수정
        profileDetail.innerHTML = `<input value="${profileDetail.textContent}"></input>`; // 변경됨: 보간 수정
        
        e.target.textContent = "프로필 편집 완료";
        changing = true;
        }
    }