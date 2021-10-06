import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class ListCategories extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  listCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    const { handleRadio } = this.props;

    return (
      <aside>
        <ul className="dropdown">
          <div className="dropbtn">Categorias</div>
          <div className="dropdown-content">
            { categoriesList.map((category) => (
              <li key={ category.id }>
                <label htmlFor={ category.id }>
                  <input
                    type="radio"
                    name="radio-input"
                    value={ category.name }
                    id={ category.id }
                    data-testid="category"
                    onChange={ handleRadio }
                  />
                  { category.name }
                </label>
              </li>
            ))}
          </div>
        </ul>
      </aside>
    );
  }
}

ListCategories.propTypes = {
  handleRadio: PropTypes.func.isRequired,
};
