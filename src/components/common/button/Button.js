// 버튼 공통 컴포넌트 & CSS
import { useEffect, useState } from "react";

// style & img
import styled, { css } from "styled-components";

/**
 * @param {string} text 버튼 내부 텍스트
 * @param {string} type 버튼 타입 (button, submit)
 * @param {string} errorMessage 표시할 에러 메시지
 * @param {() => void} handleClick 버튼 클릭시 실행할 이벤트, Route 기능의 경우 history.push와 같은 함수를 이용합니다.
 * @param {string} buttonColor 버튼 배경 색상
 * @param {string} hoverColor 버튼 호버 배경 색상
 * @param {object} props 폰트 관련 속성
 */

    