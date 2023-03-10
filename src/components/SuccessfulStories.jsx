import { useState } from 'react';
import ButtonFunc from './ButtonFunc';
import CurrentSwiper from './CurrentSwiper';
import SuccessfulStoriesPopap from './SuccessfulStoriesPopap';
import { Link } from 'react-router-dom';
import one from 'image/child.jpg';
import two from 'image/cur4.jpg';
import three from 'image/cur2.jpg';


function SuccessfulStories() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const setModalState = (state, index) => {
    setModalOpen(state);
    setSelectedItemIndex(index);
  };
  const stories = [
    {
      id: 227,
      image: { one },
      title: 'Подарунки до дітей на новорічні свята',
      description: `Наш фонд зібрав подарунки до новорічних свят для дітей - солодощі із Польщі та
    Німеччини, канцтовари,іграшки з різних міст України.`,
      date: 'Nov 22, 2022',
      longDesc: `Знаєте, іноді наші волонтери стають справжніми чарівниками. Ці дівчата з 
    деокупованої території Харківської області, що на фото, просто прийшли у
    місцевий магазин і ... отримали від наших волонтерів чудові подаруночки з
    нагоди новорічних свят. Їдучи повз магазин, волонтери побачили на вулиці дітей
    і вирішили їх порадувати. Зупинили авто, зайшли слідом за дітьми до магазину і
    на здивування всіх присутніх вручили дівчаткам подарункові коробочки, в яких
    лежали солодощі із Польщі і Німеччини, канцтовари,іграшки з різних міст
    України. Діти були дуже задоволені і довго дякували. Чарівниками бути просто!
    Особливо, коли є справжні друзі! Ми щиро вдячні кожному, хто допомагає нашій
    команді робити дітей з деокупації трохи щасливіше!`,
    },
    {
      id: 228,
      image: { two },

      title: 'Видачу корму для родин, що прихистили безпритульних тварин',
      description: `Ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток
    безпритульним тваринам.`,
      date: 'Nov 22, 2022',
      longDesc: `Наша команда має на меті допомогти тваринам, що залишилися без дому внаслідок війни.
    Тому ми регулярно закуповуємо корм і віддаємо його родинам, які дали прихисток безпритульним тваринам.
    На цьому фото - Григорій, Грицько, Гриць.
    Він прибіг до сільради Нижнього Бурлука разом із своїм малим чотирилапим другом і відразу привернув до себе нашу увагу. Він з радістю дозволив себе погладити і почухати.
    Мешканка села поділилася з нами його історією:
    “Ой, цей пес прийшов у наше село із українськими солдатами, жив у них, бо якось до них прибився. Може загубився, а може його залишили хазяї, не знаю. Потім солдати поїхали, а він знову залишився. Худий був страшне.”
    Ця історія має гарний кінець. Пес знайшов добру родину, що його прихистила. Але  таких покинутих тварин зараз багато, вони мерзнуть та голодують.
    Ми щиро вдячні нашим партнерам, які допомагають нам кормами для тварин. Це дуже важливо. Особливо взимку.
    `,
    },
    {
      id: 229,
      image: { three },

      title: 'Допомога малобільним людям',
      description: `Наш команда разом із ГО “Фенікс” придбали ходунки для Тамари - літньої мешканки міста
    Куп’янську. Це місто та його жителі дуже постраждали внаслідок російської військової
    агресії.`,
      date: 'Nov 22, 2022',
      longDesc: `Коли ми вперше поїхали до Купянська, ми познайомилися з старенькою жіночкою Тамарою.
    Усе своє життя вона провела на сцені, їздила з концертами разом із своїм колективом. І раптом, ця дієва творча людина опинилася у полоні жахливих обставин - війна, окупація, інвалідний візок...
    Тамара дуже мріяла знову ходити. І озвучила своє бажання так:
    “Дівчатка, може ви ходунки якісь мені знайдете? Так хочеться на вулицю виходити, свіжим повітрям подихати!”
    Наша команда звернулася по допомогу і керівниця ГО “Фенікс13” Наталія Меркулова передала нам ходунки. Вже у наступну поїздку ми привезли їх Тамарі.
    Для Тамари це було справжнє диво.
    Ми були щасливі, що змогли допомогти їй.`,
    },
  ];

  return (
    <div className="successful-stories">
      <div className="successful-stories-wrapper _container">
        <h2>Успішні історії</h2>
        <p>Зараз для нас є важливим закриття 4 найважливіших потреб:</p>

        <div className="card-block-stories-wrapper">
          {stories.map((item, index) => {
            return (
              <div className="card-block-stories" key={item.id}>
                <div className="card-block-stories-img">
                  <CurrentSwiper index={index} handleClick={setModalState} />
                </div>
                <div onClick={() => setModalState(true, index)}>
                  <img src={item.image} alt="arrow" />
                  <h4>{item.title}</h4>
                  <span>{item.description}</span>
                  <section>{item.date}</section>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button-single-story">
          <Link to="/SuccessfulStoriesPage">
            <ButtonFunc class="card-block__singl-button">
              Всі успішні історії
              <img
                className="card-block__singl-button-arrow"
                src={one}
                alt="arrow"
              />
            </ButtonFunc>
          </Link>

          <SuccessfulStoriesPopap
            selectedItem={stories[selectedItemIndex]}
            isModalOpen={isModalOpen}
            setModalState={setModalState}
          />
        </div>
      </div>
    </div>
  );
}

export default SuccessfulStories;
