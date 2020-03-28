using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API_Service;
using API_Service.Models;
using System.Web.Http.Cors;

namespace API_Service.Controllers
{
    [EnableCors("http://localhost:4200", headers: "*", methods: "*")]
    public class StudentSubjectsController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/StudentSubjects
        public IQueryable<StudentSubject> GetStudentSubject()
        {
            return db.StudentSubject;
        }

        // GET: api/StudentSubjects/5
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult GetStudentSubject(int id)
        {
            var studentSubject =db.StudentSubject.Where(a=>a.SubID==id).Include(s=>s.Student).Include(a=>a.Subject).ToList();
            if (studentSubject == null)
            {
                return NotFound();
            }

            return Ok(studentSubject);
        }
        [ResponseType(typeof(StudentSubject))]
        [Route("Api/StudentSubjects/GetStudentDetails/{id:int}")]
        public IHttpActionResult GetStudentDetails(int id)
        {
            var studentSubject = db.StudentSubject.Where(a => a.StID == id).Include(s => s.Student).Include(a => a.Subject).ToList();
            if (studentSubject == null)
            {
                return NotFound();
            }

            return Ok(studentSubject);
        }
        [ResponseType(typeof(StudentSubject))]
        [Route("api/studentsubjects/PostStudentSubjectMany")]
        [HttpPost]
        public IHttpActionResult StudentSubjectMany([FromUri] string stdIds, [FromUri] string subIds)
        {

            string[] std = stdIds.Split(',');
            string[] sub = subIds.Split(',');
            StudentSubject student = new StudentSubject();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            foreach (var StdId in std)
            {
                int StudentID = int.Parse(StdId);
                foreach (var SubId in sub)
                {
                    int SubjectID = int.Parse(SubId);
                    student = new StudentSubject() { StID = StudentID, SubID = SubjectID };
                    var ostd = db.StudentSubject.SingleOrDefault(a => a.StID == StudentID && a.SubID == SubjectID);
                    if (ostd == null)
                    {
                        db.StudentSubject.Add(student);
                    }
                }

            }

            //db.StudentSubject.Add(studentSubject);
            
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (StudentSubjectExists(student.StID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = student.StID }, student);
        }


        // PUT: api/StudentSubjects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudentSubject(int id, StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentSubject.StID)
            {
                return BadRequest();
            }

            db.Entry(studentSubject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentSubjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/StudentSubjects
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult PostStudentSubject(StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StudentSubject.Add(studentSubject);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (StudentSubjectExists(studentSubject.StID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = studentSubject.StID }, studentSubject);
        }

        // DELETE: api/StudentSubjects/5
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult DeleteStudentSubject(int id)
        {
            StudentSubject studentSubject = db.StudentSubject.Find(id);
            if (studentSubject == null)
            {
                return NotFound();
            }

            db.StudentSubject.Remove(studentSubject);
            db.SaveChanges();

            return Ok(studentSubject);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentSubjectExists(int id)
        {
            return db.StudentSubject.Count(e => e.StID == id) > 0;
        }
    }
}