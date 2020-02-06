import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
      }

    return (
      <>
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={() => props.onSearch(value)}
            >
              Поиск
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={valueChangeHandler}
            value={value}
          />
        </div>

        <p className="text-center">
          Введите в строку Поиска необходимый для вам запрос, по клику увидите подходящий запрос. Если его не будет,
          тогда отобразится вся информация.
        </p>
        <p className="text-center">Чтобы отсортировать, нажмите на название столбца.</p>
        <p className="text-center">Нажмите на любую строку и увидите детали внизу страницы.</p>
      </>
    );
}
