import React from 'react'
import Header from '../../common.elements/Header'
import Nameheader from './nameheader'

function Russia() {
    return (
        <>
            <Header/>
            <Nameheader title="Rusya" ek="da"/>
            <section className="row mt-4 d-flex-justify-content-center">
                <div className="container">
                    <h1 style={{fontWeight:100,fontFamily:"'Roboto',sans-serif"}}>Rusya cv tələbləri</h1>
                    <p className="mt-2 " style={{fontSize:20,fontWeight:600,color:"rgb(107,107,107)"}}>
                        Rusyada iş axtarərkən bütün məlumatları əlavə elədiynizdən əmin olun.Məsələn Avropada olduğu kimi , doğum tarixinizi qeyd edin ancaq bir fotoya ehtiyac yoxdur.Rus cv ,Rus mədəniyyətinin özəllik və gözləntilərini qarşılamalıdır
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Uzunluq</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        CV üçün iki səhifə kifayətdir.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Foto</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Foto istəyə bağlı olsada,qoymağınız məsləhət görülmür.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Şəxsi məlumat</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Rus cv-də cv-nin üst qisminə ad,doğum tarixi,adres,telefon nömrəsi ,email əlavə edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>İş təcrübəsi</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Əvvəlki vəzifələrinizi tərs xronolojiq ardıcllıqla sıralayın.Rus cv-də iş ilə əlaqədər olan bacarıq və vəzifələrin ilk sıralanması daha məqsədə uyğundur.Cv-i şirkətə uyğun hazrılayın.Şirkəti və vəzifəni araşdırdıqdan sonra cv hazırlayın.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Təhsil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                        Təhsilinizi iş təcrübəsinin üzərində qeyd edin.Qazandığınız diplomaların xaricində ,təhsil nailiyyətlərinizi də qeyd edin.
                    </p>
                    <h2>Başqa cv məlumatları:</h2>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Dil</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Bildiyinizdən əmin olduğunuz və axıcı şəkildə danışa bildiyniz dilləri qeyd edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Referanslar</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                            Referans siyahısı vermək lazım deyil.İşverən sizdən referans istəyirsə o zaman bir referans təqdim edin.
                    </p>
                    <h4 style={{fontWeight:600,fontFamily:"'Roboto',sans-serif"}}>Xülasə</h4>
                    <p className="mt-2 " style={{fontSize:20,color:"rgb(107,107,107)"}}>
                    Fərqli ölkələrin və fərqli şirkətlərin özünəməxsus gözləntiləri və qaydaları olduğu üçün bütün dünyada iş üçün müraciət edərkən strateji olun. cv-ləriniz yalnız müraciət etdiyiniz ölkəyə deyil, müəyyən bir işə uyğunlaşdırılmalıdır. Rus cv-si ən yaxşı nəticələr üçün yuxarıda göstərilən bütün qaydalara riayət etməlidir.
                    </p>



                </div>
            </section>
        </>
    )
}

export default Russia
