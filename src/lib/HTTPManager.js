import axios from "axios";

const PRODUCTION = process.env.NODE_ENV === "development" ? false : true;

export const SERVER_URL = PRODUCTION
  ? process.env.NEXT_PUBLIC_PROD_URL
  : process.env.NEXT_PUBLIC_DEV_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});
// 회원가입
export async function SignUp(props) {
  return await instance
    .post("/member/signup", props)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

// 로그인
export async function SignIn(props) {
  return await instance
    .post("/member/login", props)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
// export async function SignUp(Props) {
//   return await instance
//     .post("/user/signup", Props)
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error;
//     });
// }

// request 인터셉터, 헤더에 accessToken 대입
// instance.interceptors.request.use(
//   (config) => {
//     if (localStorage.getItem("recoil-persist")) {
//       const recoilPersist = JSON.parse(localStorage.getItem("recoil-persist"));
//       const accessToken = recoilPersist?.UserInfo?.accessToken;
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // refreshToken에 의한 accessToken 재발급시 응답값의 새token 업데이트
// instance.interceptors.response.use(
//   (response) => {
//     if (response?.data?.forcedLogout) {
//       // 강제 로그아웃 처리
//       const userInfo = JSON.parse(
//         localStorage.getItem("recoil-persist")
//       ).UserInfo;
//       localStorage.removeItem("recoil-persist");
//       Logout(userInfo);
//       window.location.replace("/");
//     }
//     if (response?.data?.accessToken) {
//       // 엑세스 토큰 재발급 받아오기 처리
//       const newAccessToken = response.data.accessToken;
//       let recoilPersist = JSON.parse(localStorage.getItem("recoil-persist"));
//       recoilPersist.UserInfo.accessToken = newAccessToken;
//       localStorage.setItem("recoil-persist", JSON.stringify(recoilPersist));
//     }
//     return response;
//   },
//   (error) => {
//     if (error?.response?.data?.forcedLogout) {
//       // 강제 로그아웃 처리
//       const userInfo = JSON.parse(
//         localStorage.getItem("recoil-persist")
//       )?.UserInfo;
//       localStorage.removeItem("recoil-persist");
//       Logout(userInfo);
//       window.location.replace("/");
//     }
//     return Promise.reject(error);
//   }
// );

/* 회원 관련 */
//회원가입 기능
// export async function SignUp(Props) {
//   return await instance
//     .post("/user/signup", Props)
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error;
//     });
// }

// //회원가입 아이디 중복체크 기능
// export async function DupCheckUserId(Props) {
//   return await instance
//     .post("/user/dupCheckUserId", Props)
//     .then(function (response) {
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error;
//     });
// }

// // 로그인
// export async function LoginIn(Props) {
//   return await instance
//     .post("/user/login", Props, { withCredentials: true })
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// 로그 아웃
export async function Logout(Props) {
  return await instance
    .patch("/member/logout", Props)
    .then((res) => {
      // localStorage.removeItem("autoLogin");
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

// // 토큰 체커
// export async function authChecker(Props) {
//   return await instance
//     .post("/user/authChecker")
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// /* 회원 관련 끝 */

// /* bbs 관련 */
// // 게시글 목록 조회
// export async function getDocumentList(props) {
//   const pageQuery = `?page=${props.nowPage}`;
//   return await instance
//     .get(`/bbs/${props.category}` + pageQuery)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }

// // 게시글 읽기
// export async function DocumentRead(props) {
//   // const pageQuery = `?sportsId=${Props.sportsId}&ac=${Props.addrSet.addrCode}`;
//   return await instance
//     .get(`/bbs/read/${props.docId}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }

// // 게시글 작성
// export async function DocumentWrite(props) {
//   const formData = new FormData();

//   // for (let i = 0; i < props.files.length; i++) {
//   //   formData.append("files", props.files[i]);
//   // }

//   formData.append("subject", props.subject);
//   formData.append("content", props.content);
//   formData.append("arg1", props.arg1);
//   formData.append("arg2", props.arg2);

//   return await instance
//     .post("/bbs/write", props, {
//       // headers: {
//       //   "Content-Type": "multipart/form-data",
//       // },
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       alert(err.response.data.message);
//       return err;
//     });
// }

// // 게시글 삭제
// export async function DocumentDelete(Props) {
//   return await instance
//     .patch(`/bbs/delete/${Props.documentId}`, Props)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }

// // 게시글 추천/반대 처리
// export async function DocumentThumbsUpAndDown(Props) {
//   return await instance
//     .patch(`/bbs/thumbs/${Props.id}`, Props)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // 게시글 추천 올리기
// export async function DocumentThumbsUp(props) {
//   return await instance
//     .patch(`/bbs/thumbsUp/${props.documentId}`, props)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }

// // 댓글 작성
// export async function CommentWrite(Props) {
//   return await instance
//     .post("/bbs/comment/write", Props)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // 댓글 목록 가져오기
// export async function GetCommentList(props) {
//   return await instance
//     .get(`/bbs/read/comment/${props.docId}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }

// // 댓글 삭제
// export async function CommentDelete(Props) {
//   return await instance
//     .patch(`/bbs/comment/delete/${Props.commentId}`, Props)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }
// /* bbs 관련 끝.*/

// /** Sports 관련 */
// // 운동 종목 전체 목록
// export async function SportsList(Props) {
//   return await instance
//     .get("/sports")
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// }
// /** Sports 관련 끝. */

// /** 경기장 관련 */
// export async function ComplexList(Props) {
//   const pageQuery = `?page=${Props.nowPage}&sportsId=${Props.urlSportsId}&ac=${Props.addrCode}`;
//   return await instance
//     .get("/complex/list" + pageQuery)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//       return;
//     });
// }
// /** 경기장 관련 끝. */
