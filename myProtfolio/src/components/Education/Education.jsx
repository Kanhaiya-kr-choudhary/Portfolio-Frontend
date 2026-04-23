import React from "react";
import { Card, Col, Row } from "antd";
import { useState, useEffect } from "react";
import API from "../../api";
const Education = () => {

    const [education, setEducation] = useState({
        gradution: {},
        higherSchool: {},
        SecondarySchool: {}
    })
    useEffect(() => {
        API.get('/api/education')
            .then((response) => {
                setEducation(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section
            id="education"
            className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">
                        My <span className="text-blue-500">Education</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Academic background and qualifications
                    </p>
                </div>

                <Row gutter={[24, 24]}>

                    <Col xs={24} md={12}>
                        <Card
                            bordered={false}
                            bodyStyle={{ padding: "24px" }}
                            className="bg-white/5! border! border-white/10! rounded-2xl! backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 text-white"
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {education.gradution.courseName}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {education.gradution.collageName}
                            </p>
                            <p className="mt-4 text-gray-300">
                                {education.gradution.description}
                            </p>
                        </Card>
                    </Col>

                    <Col xs={24} md={12}>
                        <Card
                            bordered={false}
                            bodyStyle={{ padding: "24px" }}
                            className="bg-white/5! border! border-white/10! rounded-2xl! backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 text-white"
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {education.higherSchool.courseName}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {education.higherSchool.collageName}
                            </p>
                            <p className="mt-4 text-gray-300">
                                {education.higherSchool.description}
                            </p>
                        </Card>
                    </Col>

                    <Col xs={24} md={12}>
                        <Card

                            className="bg-white/5! border! border-white/10! rounded-2xl! backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 text-white"
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {education.SecondarySchool.courseName}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {education.SecondarySchool.collageName}
                            </p>
                            <p className="mt-4 text-gray-300">
                                {education.SecondarySchool.description}
                            </p>
                        </Card>
                    </Col>


                </Row>
            </div>
        </section>
    );
};

export default Education;