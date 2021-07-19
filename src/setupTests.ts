/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import ReactSixteenAdapter as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter(), disableLifecycleMethods: true});