interface ProfileProps {
  name: string;
  imageUrl: string;
  profession: string;
  awardsCount: number;
  awards: string;
  discovery: string;
}

function Profile({
  name,
  imageUrl,
  profession,
  awardsCount,
  awards,
  discovery,
}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b>({awards})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awardsCount={4}
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awardsCount={2}
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
