import React, { Component } from 'react';
import {render} from 'react-dom';
import TopBar from './components/TopBar/TopBar';
import PostList from './components/PostList/PostList';
import './App.css';

render(<div className="App">
            <TopBar/>
            <PostList/>
        </div>,
     document.getElementById('app'));
