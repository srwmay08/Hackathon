var category = $('#category').text();
var defaultURL = '/categorylist?limit=10';
var React = require('react');

// Milliseconds for every ajax call to the server
var pollInterval = 4000;

var App = React.createClass({
    getListOfcategorys: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({categorys: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return { categorys: [] };
    },
    componentDidMount: function() {
        this.getListOfcategorys();
    },
    render: function() {
        return (
            <ul className="categorys-list-app">
                <categorysList categorys={this.state.categorys} />
            </ul>
        );
    }
});

var categorysList = React.createClass({
    render: function() {
        var categorys = this.props.categorys.map(function(category) {
            return (
                <category category={category.name} />
            );
        })

        return (
            <ul className="categorys-list">
                {categorys}
            </ul>
        );
    }
});

var category = React.createClass({
    render: function() {
        var category = this.props.category;
        var link = '/r/' + category;

        return (
            <li className="category-list-item">
                <a href={link}>{category}</a>
            </li>
        );
    }
})

React.render(
    <App url={defaultURL} />,
    document.getElementById("react-categoryfiller-app-mount")
);
