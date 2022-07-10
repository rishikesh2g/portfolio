import React, { Component } from "react";
import ImageOfMe from './Me.jpg';

class About extends Component {
    render(){
        return(
            <div className="jumboSize">
                <div className="jumbotron">
                    <img src={ImageOfMe} className="mx-auto d-block img-responsive aboutImg" alt="Avatar" />
                    <h1 className="h1 text-center">Rishikesh Singh</h1>
                    <h2 className="h2 text-center"><u>About Me!</u></h2>
                    <div className="section-one">
                        <div className="aboutMeDiv">
                            <p className="font-weight-bold">Hello , my name is Rishikesh Singh.</p>
                                
                            <p className="font-weight-bold"> I am a student of lovely professional university Right Now Pursuing B.tech in Computer Science and Engineering
I believe that I am good in programming language and always try to figure out the most effective solution of any problem.</p>

                            <p className="font-weight-bold"> programming language I am currently working with c/c++, Java and python.  And I have a good understanding of Data Structures and Algorithms. And also I have a good knowledge of Web development skills like html css and javascript  and I work with wabfram lik react js. I have done some certification on react js from upgrad.</p>

                            <p className="font-weight-bold">I gain some certification through udamy, Coursera and great learning My usp is I learn very quick and adopt surrounding.</p>
                        </div>
                    </div>
                </div>
            </div>
                            
        );
    }
}

export default About;