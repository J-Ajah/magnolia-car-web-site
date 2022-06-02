package de.nexum.magnolia.templating.rest.service.v1;
import info.magnolia.context.MgnlContext;
import info.magnolia.rest.AbstractEndpoint;
import info.magnolia.rest.EndpointDefinition;
import info.magnolia.templating.jsonfn.JsonBuilder;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import info.magnolia.templating.jsonfn.JsonTemplatingFunctions;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/delivery/java/news/v1")
public class NewsEndPointJava <D extends EndpointDefinition> extends AbstractEndpoint<D> {


    private final JsonTemplatingFunctions jsonfn;
    private String workspaceName = "news";

    public NewsEndPointJava(D endpointDefinition, JsonTemplatingFunctions jsonfn) {
        super(endpointDefinition);
        this.jsonfn = jsonfn;
    }

    /**
     * Produces json by given workspace, path and depth.
     */
    @ApiResponses(value = {
            @ApiResponse(description = "OK",responseCode="200"),
            @ApiResponse(description = "No content", responseCode="204"),
            @ApiResponse(description = "internal Server Error", responseCode="500"),
    })
    @Path("/{workspace}{path:(/.+)?}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response simpleJson(
            @PathParam("path") @DefaultValue("/") String path,
            @QueryParam("depth") @DefaultValue("0") int depth,
            @QueryParam("explode") @DefaultValue("image,dam; images,dam") String explode
    ) {

        Session session;
        Node node;
        try {
            session = MgnlContext.getJCRSession(workspaceName);
            node = session.getNode(path);
        } catch (RepositoryException e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }

        String json;
        if (node == null) {
            return Response.status(Response.Status.NO_CONTENT).build();
        } else {
            JsonBuilder jsonBuilder = jsonfn.from(node);
            jsonBuilder.down(depth);
            jsonBuilder.addAll().exclude("jcr.*", "mgnl.*");



            jsonBuilder.wrapForI18n();
            json = jsonBuilder.print();
        }

        return Response.ok(json).build();
    }
}




