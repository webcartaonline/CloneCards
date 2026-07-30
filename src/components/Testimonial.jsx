import '../styles/Testimonial.css';

const imageModules = import.meta.glob('../assets/img/*.png', {
    eager: true,
    import: 'default'
});


function Testimonial({ name, country, image, role, company, testimonial }) {
    return (
        <div className='testimonialContainer'>
            <img
                className='testimonialImage'
                src={imageModules[`../assets/img/${image}.png`]}
                alt={`Photo of ${name}`}
            />

            <div className='testimonialTextContainer'>
                <p className='testimonialName'>
                    <strong>{name}</strong> in {country}
                </p>

                <p className='testimonialRole'>
                    {role} at <strong>{company}</strong>
                </p>

                <p className='testimonialText'>
                    "{testimonial}"
                </p>
            </div>
        </div>
    );
}

export default Testimonial;
