import { BrandLogo } from './BrandLogo'
import { FooterPolicies } from './FooterPolicies'

export function FooterInformation({ onNotice }: { onNotice: (title: string) => void }) {

  return (
    <div className="footer-information">
      <BrandLogo placement="footer" />
      <p className="footer-copyright">Copyright © Gayadi. All Rights Reserved</p>
      <div className="footer-details">
        <p>너의 모든 여행에, 가야디.</p>
        <p>여행 계획부터 소중한 순간의 기록까지 함께하는 여행 서비스</p>
        <p>사업자 정보 및 공식 문의 채널 준비 중</p>
      </div>
      <FooterPolicies onNotice={onNotice} />
    </div>
  )
}
