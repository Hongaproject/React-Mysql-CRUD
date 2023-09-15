import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Write () {
    return(
        <div>
            <Form>
                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">제목</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="제목을 입력해주세요." />
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group mb-3">
                    <label for="exampleInputPassword1">내용</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="내용을 입력해주세요."/>
                </div>
            </Form>
            <div className="text-center">
                <Button variant="primary">작성하기</Button>
                <Button variant="secondary">취소</Button>
            </div>
        </div>
    );
}

export default Write;