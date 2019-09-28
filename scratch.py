
def set(sn,cn,an,dd,dm,dy):
    pass

def getCourses(sn):
    pass

def getAssignments(sn,cn):
    pass

def assignmentInfo(sn,cn,an):
    pass

def main():
    flag = True

    while flag:
        i = input("cmd>>")
        if(i=="?"):
            print("set(student name)(course name)(assignment name)(due date day)(due date month)(due date year)\n"
                  "getCourses(student name)\n"
                  "getAssignments(student name)(course name)\n"
                  "assignmentinfo(student name)(course name)(assignment name)"
                  "quit")

        elif(i=="set"):
            sn=input("  student name:: ")
            cn=input("  course name:: ")
            an=input("  assignment name:: ")
            dd=input("  due day:: ")
            dm=input("  due month:: ")
            dy=input("  due year:: ")
            set(sn,cn,an,dd,dm,dy)

        elif(i=="getCourses"):
            sn=input("  student name:: ")
            getCourses(sn)

        elif(i=="getAssignments"):
            sn=input("  student name:: ")
            cn=input("  course name:: ")
            getAssignments(sn,cn)

        elif (i == "assignmentInfo"):
            sn=input("  student name:: ")
            cn=input("  course name:: ")
            an=input("  assignment name:: ")
            assignmentInfo(sn,cn,an)

        elif(i=="quit"):
            flag=False
    pass

main()
