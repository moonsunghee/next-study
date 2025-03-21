"use client";
import PageHeader from "@/src/components/PageHeader";
import { useState } from "react";
export default function Home() {
  const hd_props = {
    num:"01",
    tit:"Card Fit",
    des: "사용자의 소비 패턴, 라이프스타일, 금융 목표에 기반한 최적의 신용카드 추천 복잡한 카드 혜택 비교를 간소화하여 누구나 쉽게 자신에게 맞는 카드를 선택 가능"
  }
  return (
    <>
      <PageHeader number={hd_props.num} title={hd_props.tit} description={hd_props.des}>
        <button className="dim">로그인</button>
        <button className="active">카드불러오기</button>
        <button>선택카드목록보기</button>
      </PageHeader>
      <div className="page-body">
        <section>fldlsafjlsdajflksd</section>
      </div>
    </>
  );
}
