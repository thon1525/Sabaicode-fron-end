export default function fruid(){
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];
    const data=  people.map(person => {
        const [name, field] = person.split(':');
        return (
          <li key={name.trim()}>
            <strong>{name}:</strong> {field.trim()}
          </li>
        );
      })

    return data;
}