# full_stack_open_2021_part7
 
[Course](https://fullstackopen.com/en/part7)

## Configuration

Configure eslint.
```bash
npm install --save-dev eslint
npm init @eslint/config
```

Add jsconfig to import everything from src.

## Part a) React-router

Basic usage as Router, Routes, Route and Link.<br>
Hooks as useNavigate, useParams and useMatch.<br>

## Part b) Custom hooks

We learn to create an useForm hook.<br>
```javascript
// hook file
export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');

  return {
    type,
    value,
    onChange,
    reset,
  };
};

// main
const { reset: resetContent, ...content } = useField('text');
const { reset: resetAuthor, ...author } = useField('text');
const { reset: resetInfo, ...info } = useField('text');
...
<input {...content} />
```

## Part c) More about styles

React Bootstrap, Material UI and some other UI frameworks.

## Part d) Webpack

Teaches how webpack works and how it's everything build inside the build directory.

## Part f) Exercise implementing Redux, custom hooks and React Router
