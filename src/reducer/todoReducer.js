export const initialState = {
  todoText: '',
  status: 'all',
  data: [],
  filteredData: [],
  loading: false,
  error: null,
};

export const todoReducer = (state, { type, payload }) => {

  if(type == 'CHANGE_STATUS'){
    // console.log(document.querySelectorAll('.tabs'));
    const tabsArr = document.querySelectorAll('.tabs');
    tabsArr.forEach(element => {
      element.classList.remove('activeTab');
    });
    document.getElementById(payload).classList.add('activeTab');
  }

  switch (type) {
    case 'CHANGE_TEXT':
      return { ...state, todoText: payload };

    case 'LOADING':
      return { ...state, loading: payload };

    case 'ERROR':
      return { ...state, error: payload };

    case 'LOAD_TODO': {
      return { ...state, data: payload, filteredData: payload };
    }

    case 'ADD_TODO': {
      console.log(payload);
      if(payload.text !== ''){
        const newTodo = [...state.data, payload];
        return {
          ...state,
          data: newTodo,
          todoText: '',
          status: 'all',
          filteredData: newTodo,
        };
      } 
    }

    case 'COMPLETE_TODO': {
      const completeTodo = (arr) =>
        arr.map((x) => {
          if (x.id === payload.id) {
            return payload;
          }
          return x;
        });

      const updatedData = completeTodo(state.filteredData);
      const updatedFilteredData = completeTodo(state.data);
      return {
        ...state,
        data: updatedData,
        filteredData: updatedFilteredData,
      };
    }

    case 'REMOVE_TODO': {
      const removeTodo = (arr) => arr.filter((x) => x.id !== payload);

      const removeData = removeTodo(state.filteredData);
      const removeFilteredData = removeTodo(state.data);
      return {
        ...state,
        data: removeData,
        filteredData: removeFilteredData,
      };
    }

    case 'CHANGE_STATUS': {
      return {
        ...state,
        filteredData: state.data.filter((x) => {
          console.log(x);
          switch (payload) {
            case 'pending':
              
              return x.isDone === false;
            case 'completed':
              return x.isDone === true;
            default:
              return true;
          }
        }),
      };
    }

    default:
      return state;
  }
};