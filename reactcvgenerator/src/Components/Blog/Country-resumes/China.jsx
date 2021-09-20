import React from 'react'
import Header from '../../common.elements/Header'
import Nameheader from './nameheader'

function China() {
    
    return (
        <>
            <Header/>
            <Nameheader title="Çin" ek="də"/>
            <section className="row mt-4 d-flex-justify-content-center">
                <div className="container">
                    <h1 style={{fontWeight:100,fontFamily:"'Roboto',sans-serif"}}>Çin cv tələbləri</h1>
                    <p className="mt-2 " style={{fontSize:20,fontWeight:600,color:"rgb(107,107,107)"}}>
                        Çində iş axtararkən CV -nin Çinli işə götürənlərin və işəgötürənlərin gözlədiyi format və məzmuna sahib olacağından əmin olmaq vacibdir.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Uzunluq</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        CV üçün bir -iki səhifə kifayətdir.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Foto</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Çin üçün hazırlanmış cv-də yaxın zamanda çəkilmiş bir vəsiqəlik şəkil gözlənilir
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Şəxsi məlumat</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Çin cv-də standart məlumatlardan(ad,doğum tarixi,adres,telefon nömrəsi ,email) əlavə cinsiyyətiniz,mədəni vəziyyətiniz varsa uşaqlarınız sayı və yaşları qeyd olunmalıdır.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>İş təcrübəsi</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            İş təcrübəniz tərs xronolojiq ardıcıllıqla düzülməlidir.Şirkət adını,iş ünvanını ,işin başlama və bitmə tarixini qeyd edin.Hər vəzifədə məsuliyyətlərinizi və nailiyyətlərinizi qeyd edin.Bunları qeyd edərkən onları şişirtməkdən qaçın. 
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Təhsil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Təhsil Çin cv-də çox önəmlidir.Dərəcə və diplomlarınızı ,iş təcrübəsi qismində qeyd etdiyiniz kimi tərs xronolojiq ardıcıllıqla qeyd edin.Çox çinlinin yüksək dərəcə və diplomlara malik olduğunu unutmayın
                    </p>
                    <h2>Başqa cv məlumatları:</h2>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Dil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Bildiyinizdən əmin olduğunuz və axıcı şəkildə danışa bildiyniz dilləri qeyd edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Referanslar</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Yazılı bir referans məktubunuz varsa cv-ə qeyd edin.Əgər yoxdursa, tələb edildiyi halda təmin edə biləcəynizi cvdə qeyd edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Xülasə</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Çin üçün yazılmış cv 2 səhifədən çox olmayıb sizi doğru şəkildə qarşıdakı insana təqdim etməlidir.Həmçinin intervyu-a çağrılmaq üçün əla namizəd olduğunuz effektini verməlidir
                    </p>



                </div>
            </section>
        </>
    )
}

export default China
