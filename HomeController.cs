using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data;
namespace Prac_Mvc.Controllers
{
   // [EnableCors(origins: "http://localhost:18649", headers: "*", methods: "*")]
  
    public class HomeController : ApiController

    {

        public class Student
        {
            public int StudentId { get; set; }
            public string StudentName { get; set; }
            public int Age { get; set; }
        }
        ApiResult apiresult = new ApiResult();
        [HttpPost]
        public ApiResult Post(int a)
        {
         //   List<Student> l = new List<Student>();

            var studentList = new List<Student>{
                            new Student() { StudentId = 1, StudentName = "John", Age = 18 } ,
                            new Student() { StudentId = 2, StudentName = "Steve",  Age = 21 } ,
                            new Student() { StudentId = 3, StudentName = "Bill",  Age = 25 } ,
                            new Student() { StudentId = 4, StudentName = "Ram" , Age = 20 } ,
                            new Student() { StudentId = 5, StudentName = "Ron" , Age = 31 } ,
                            new Student() { StudentId = 4, StudentName = "Chris" , Age = 17 } ,
                            new Student() { StudentId = 4, StudentName = "Rob" , Age = 19 }
                        };
            DataTable dt = new DataTable();
            apiresult.data = dt;
            apiresult.message = "test";
            apiresult.status = "true";
            return apiresult;

         //   var name = b;
        }


        [HttpGet]
        public IEnumerable<string> Get(int a)
        {
            return new string[] { "value1", "value2" };
        }

    }
}
//<httpProtocol>
//      <customHeaders>
//        <clear />
//        <add name = "Access-Control-Allow-Origin" value="*" />
//      </customHeaders>
//    </httpProtocol>

//config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("text/html"));