export const Materials = ({ items, onDelete, onUpdate }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>Название: {item.title}</p>
          <img src={item.image} alt="" />
          {/* <p>Ссылка: {item.image}</p> */}
          {/* <button type="button" onClick={() => onDelete(item.id)}>
            Удалить
          </button> */}
          {/* <button
            type="button"
            onClick={() => onUpdate({ id: item.id, title: Date.now() })}
          >
            Редактировать
          </button> */}
        </li>
      ))}
    </ul>
  );
};
