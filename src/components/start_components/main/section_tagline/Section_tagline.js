import React from 'react';
import style from '../../../../css_moduls/start_css/section_tagline.module.css'

const SectionTagline = () => {
    return (
        <section className={`${style.tagline} container-fluid mb-5 d-flex`}>
            <div className={`row justify-content-center align-content-center`}>
                    <p className={`col-6`}>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
            </div>
        </section>
    );
};

export default SectionTagline;