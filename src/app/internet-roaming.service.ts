import { Injectable } from '@angular/core';
import { InternetRoaming } from 'src/models/internet-roaming.model';
import { Operator } from 'src/models/operators.model';

@Injectable({
  providedIn: 'root'
})
export class InternetRoamingService {
  constructor() { }

  getRoamings(): InternetRoaming[]
  {
    return [
      new InternetRoaming(1, '25 MB', 5, 1),
      new InternetRoaming(2, '150 MB', 25, 30),
      new InternetRoaming(3, '500 MB', 50, 30),
      new InternetRoaming(4, '1000 MB', 75, 30),
      new InternetRoaming(5, '50 MB (2 კვირით)', 10, 14),
    ]
  }

  getOperators(): Operator[]
  {
    return [
      new Operator('ავსტრია', 'Telekom A1, T-Mobile (Magenta Telekom), Hutchison Drei (Orange)'),
      new Operator('აზერბაიჯანი', 'Bakcell, Azercell'),
      new Operator('ალბანეთი', 'Vodafone'),
      new Operator('აშშ', 'AT&T(Cingular), T-Mobile'),
      new Operator('ახალი ზელანდია', 'Vodafone'),
      new Operator('ბელორუსი', 'Unitary enterprise A1 (Velcom), MTS'),
      new Operator('ბელგია', 'Proximus(Belgacom)'),
      new Operator('ბრაზილია', 'Claro'),
      new Operator('ბულგარეთი', 'A1 (Mobiltel), Vivacom(BTC)'),
      new Operator('განა', 'Vodafone'),
      new Operator('გერმანია', 'Telekom(T-Mobile), Vodafone D2'),
      new Operator('დანია', 'Telia'),
      new Operator('დიდი ბრიტანეთი', 'Vodafone'),
      new Operator('ესპანეთი', 'Xfera, Vodafone'),
      new Operator('ესტონეთი', 'Telia Eesti AS, Elisa, Tele2'),
      new Operator('თურექთი', '	Turkcell, Turk Telekom (AVEA), Vodafone'),
      new Operator('ირლანდია', 'Vodafone'),
      new Operator('ისრაელი', 'Hot Mobile, Pelephone'),
      new Operator('იტალია', 'ILIAD Italia, Vodafone Omnitel'),
      new Operator('კანადა', 'TELUS, Bell Mobility'),
      new Operator('კონგო', 'Vodacom'),
      new Operator('ლატვია', 'Tele2, Latvijas Mobilais Telefons SIA (LMT) Telia'),
      new Operator('ლიეტუვა', 'Omnitel, Tele2'),
      new Operator('ლიხტენშტეინი', 'Orange (Salt), Telecom A1(Mobilkom)'),
      new Operator('ლუქსემბურგი', 'P&T, Tango, Orange'),
      new Operator('მალტა', 'Vodafone'),
      new Operator('მექსიკა', 'MEXMS - Telefonica Mexico'),
      new Operator('მოზმბიკი', 'Vodacom'),
      new Operator('მოლდოვა', 'Moldtelecom'),
      new Operator('ნიდერლანდები', 'KPN, Vodafone Libertel'),
      new Operator('პოლონეთი', 'Orange, T-Mobile'),
      new Operator('პორტუალია', 'MEO(TMN), Vodafone'),
      new Operator('რუმინეთი', 'Vodafone'),
      new Operator('საბერძნეთი', 'Tele2, MTS, Megafon'),
      new Operator('სამხრეთ აფრიკა', 'Cosmote, Vodafone Panafon'),
      new Operator('სამხრეთ კორეა', 'Vodacom'),
      new Operator('საუდის არაბეთი', 'KT Corporation, SK Telecom'),
      new Operator('საფრანგეთი', 'Zain'),
      new Operator('სერბეთი', 'Bouygues Telecom, Free Mobile, SFR, Orange'),
      new Operator('სინგაპური', 'A1(VIP Mobile), Telekom Srbija'),
      new Operator('სლოვენია', 'Singtel'),
      new Operator('სომხეთი', 'A1 (SI Mobil)'),
      new Operator('ტანზანია', 'Ucom, MTS Armenia'),
      new Operator('ტაჯიკეთი', 'Vodacom'),
      new Operator('უზბეკეთი', 'Indigo (TCELL)'),
      new Operator('უკრაინა', 'Uzmobile'),
      new Operator('უნგრეთი', 'Astelit, Vodafone(MTS)'),
      new Operator('ფინეთი', 'T-Mobile, Vodafone')
    ]
  }
}
