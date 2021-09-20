import React from 'react';
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
    return (
      <aside>
        <ul>
          { categoriesList.map((category) => (
            <li
              key={ category.id }
              data-testid="category"
            >
              { category.name}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
