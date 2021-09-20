import React from 'react'
import Header from '../../common.elements/Header'
import Nameheader from './nameheader'

function Germany() {
    return (
        <div>
            <Header/>
            <Nameheader title="Almanya" ek="da"/>
            <section className="row mt-4 d-flex-justify-content-center">
                <div className="container">
                    <h1 style={{fontWeight:100,fontFamily:"'Roboto',sans-serif"}}>Almanya cv tələbləri</h1>
                    <p className="mt-2 " style={{fontSize:20,fontWeight:600,color:"rgb(107,107,107)"}}>
                    Almaniyada CV -nizi yazarkən əməl edilməli olan çox xüsusi bir iş mədəniyyəti və CV gözləntiləri var. Bu təlimat, CV'nizi yazmaq üçün bəzi qaydalar təyin edəcək, ancaq mümkünsə, CV'nizi yerli bir Alman dilində nəzərdən keçirmək, Alman CV'niz haqqında rəy almaq və bütün tələblərə cavab verdiyindən əmin olmaq üçün əla bir yoldur.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Uzunluq</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        CV üçün bir-iki səhifə kifayətdir.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Foto</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Alman CV -nə bir şəkil əlavə etməyinizə əmin olun. Alman işəgötürənlər peşəkarlığa dəyər verirlər, buna görə də şəklinizin keyfiyyətli və işinizə uyğun olduğundan əmin olun.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Şəxsi məlumat</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Almanya cv-də ad,doğum tarixi,adres,telefon nömrəsi ,email  cinsiyyətiniz,mədəni vəziyyətiniz varsa uşaqlarınız sayı və yaşları qeyd olunmalıdır.
                        Bundan əlavə olaraq yaşınızı xüsusi olaraq qeyd etməlisiniz ,yoxsa cv əksik sayılacaqdır.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>İş təcrübəsi</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            İş təcrübəniz tərs xronolojiq ardıcıllıqla düzülməlidir.Şirkət adını,iş ünvanını ,işin başlama və bitmə tarixini qeyd edin.Hər vəzifədə məsuliyyətlərinizi və nailiyyətlərinizi qeyd edin və bunlarda dəqiq olun.Güclü və aktif bir dil istafədə edin.Fəqrli nailiyyətlər üşün fərqli maddə işarələrindən istifadə edin
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Təhsil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Təhsil tərs xronolojiq ardıcıllıqla məktəbə qədər uzanan bir tarixi əhatə etməlidir.Hər təşkilatın və təhsil  sahəsinin adı xüsusi qeyd olunmalıdır.
                    </p>

                    <h2>Başqa cv məlumatları:</h2>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Könüllü iştiraklar</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Bu qisim məcburi deyil.Lakin qeyd etməyniz sizi digər rəqiblərdən daha avnatajlı edəcəkdir
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Yetənəklər</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Məktəb xaricində qazandığınız sertifkat və dil yetənəylərinizi qeyd edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Dil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Bildiyinizdən əmin olduğunuz və axıcı şəkildə danışa bildiyniz dilləri qeyd edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Referanslar</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Referansların əlaqə məlumatlarını qeyd etmək almanyada yayğın deyil.Bunun yerinə yazılı referanslara üstünlük verin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Xülasə</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Alman işəgötürənlər və işverənlər, təcrübəniz və bacarıqlarınız haqqında aydın və birbaşa olan yaxşı təşkil edilmiş və ətraflı bir CV-yə dəyər verirlər. Doğru məlumatların düzgün şəkildə yığıldığından əmin olmaq lazımdır.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Germany
