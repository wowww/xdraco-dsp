# Mir4 NFT frontEnd 
Mir4 NFT 프론트엔드 리파지토리입니다.

## 환경변수

- `env.local` : 로컬 개발용 환경 변수 파일
- `env.development` : 개발 서버용 환경 변수 파일
- `env.production` : 운영 서버용 환경 변수 파일

## Desktop

`src/pages/desktop` 하위 경우레 있는 파일들이 `Desktop` 환경용 파일들

## Mobile

`src/pages/mobile` 하위 경우레 있는 파일들이 `mobile` 환경용 파일들


## 실행 및 확인 방법

1. `yarn` : `clone` 후 아래 명령을 통해 패키지를 설치 한다.
2. `yarn run serve:local` : 개발 모드로 실행
3. 브라우저에서 `http://localhost:8080` 으로 접속해본다.
   - `index` : `http://localhost:8080/`
   - `desktop` : `http://localhost:8080/desktop.html/`
   - `mobile` : `http://localhost:8080/mobile.html/`


## 운영 빌드 방법 

1. env.production 파일에 운영 환경에 맞게 설정
2. yarn run build 실행
3. /dist 디렉토리에 생성된 파일 업로드