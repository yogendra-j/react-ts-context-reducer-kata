import Dishes from './Dishes';
import classes from './Home.module.css';

const Home = () => {
    return (
        <>
            <main>
                <section className={classes.homeSection}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto quam ratione dignissimos unde nulla magnam aliquam quod
                    rerum sit quibusdam! Et, suscipit harum! Ut sed, ullam natus culpa
                    quas rem.
                </section>
                <section className={classes.dishesSection}>
                    <Dishes/>
                </section>
            </main>
        </>
    );
}

export default Home;